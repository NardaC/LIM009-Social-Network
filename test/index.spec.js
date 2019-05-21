// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests


import { exit, createUser, signInUser, googleLogin, facebookLogin  } from "../src/view-controller/index.js";

describe('cerrar sesion', () => {
  it('debería ser una función', () => {
    expect(typeof exit).toBe('function');
  });
});

describe('crear usuarios', () => {//titulo
	it('createUser deberia ser una funcion', () => {//subtitulo
		expect(typeof (createUser)).toBe('function')//lo que quieres
	});
	it('Deberia registrar un nuevo usuario', () => {
		return createUser('abcdef@gmail.com', 'abcdef')
			.then((user) => {
				expect(user.email).toBe('abcdef@gmail.com')
			})
	})
});

describe('Login de Usuarios', () => {
	it('signInUser deberia ser una funcion', () => {
		expect(typeof (signInUser)).toBe('function')
	});
	it('Deberia iniciar sesion', () => {
		return signInUser('front@end.la', '123456')
			.then((user) => {
				expect(user.email).toBe('front@end.la')
			})
	})
});


describe('Login de Usuarios con Google', () => {
	it('deberia ser una funcion', () => {
		expect(typeof googleLogin).toBe('function');
	});
	it('Deberia poder iniciar sesion con Google', () => {
		return googleLogin().then(() => {
			expect('').toBe('')
		})
		
	})
});

describe('Login de Usuarios con Facebook', () => {
	it('deberia ser una funcion', () => {
		expect(typeof facebookLogin).toBe('function');
	});
	it('Deberia poder iniciar sesion con Facebook', () => {
		return facebookLogin().then(() => {
			expect('').toBe('')
		})
		
	})
});


