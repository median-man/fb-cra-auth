import firebase from 'firebase';
import { signIn, signOut, createUser } from './auth';

jest.mock('firebase');

// methods to set implementation of firebase.auth
const implementAuthMock = (fn => {
  const implement = (methodName, fn) => {
    const mockAuth = { [methodName]: fn };
    firebase.auth.mockReturnValue(mockAuth);
  };

  return {
    signIn: fn => implement('signInWithEmailAndPassword', fn),
    signOut: fn => implement('signOut', fn),
    createUser: fn => implement('createUserWithEmailAndPassword', fn)
  };
})();

const email = 'fakeuser@email.com';
const password = 'fakepassword';
const fakeError = { code: 'fake-error-code' };

describe('logIn', () => {
  it('should reject with firebase error', () => {
    implementAuthMock.signIn(() => Promise.reject(fakeError));
    const actual = signIn(email, password);
    return expect(actual).rejects.toMatchObject(fakeError);
  });

  it('should resolve with user credential', async () => {
    const fakeUser = { user: 'fake' };
    const mock = jest.fn(() => Promise.resolve(fakeUser));
    implementAuthMock.signIn(mock);

    await expect(signIn(email, password)).resolves.toMatchObject(fakeUser);
    expect(mock).toBeCalledWith(email, password);
  });
});

describe('logOff', () => {
  it('should sign out the user', async () => {
    const mock = jest.fn(() => Promise.resolve());
    implementAuthMock.signOut(mock);
    await signOut();
    expect(mock).toHaveBeenCalled();
  });
});

describe('createUser', () => {
  it('should create a new user', async () => {
    const mock = jest.fn(() => Promise.resolve());
    implementAuthMock.createUser(mock);
    await createUser(email, password);
    expect(mock).toHaveBeenCalledWith(email, password);
  });

  it('should reject with firebase error', () => {
    const mock = () => Promise.reject(fakeError);
    implementAuthMock.createUser(mock);
    return expect(createUser(email, password)).rejects.toMatchObject(fakeError);
  });
});
