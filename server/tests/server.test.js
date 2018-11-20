// mongod.exe --dbpath \Users\1\Documents\mongo-data
//C:\Program Files\MongoDB\Server\4.0\bin
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
//const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

beforeEach((done) => {
  User.remove({}).then(() => done());
});

describe('POST /users', () => {
  it('should create a new user', (done) => {
    var name = 'Andrii';

    request(app)
      .post('/users')
      .send({name})
      .expect(200)
      .expect((res) => {
        expect(res.body.name).toBe(name);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.find().then((users) => {
          expect(users.length).toBe(1);
          expect(users[0].name).toBe(name);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create user with invalid body data', (done) => {
    let name = "";

    request(app)
      .post('/users')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.find().then((users) => {
          expect(users.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});

