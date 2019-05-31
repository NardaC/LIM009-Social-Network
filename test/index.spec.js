// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests autentificacion
import { exit, createUser, signInUser, googleLogin, facebookLogin} from "../src/lib/controller-firebase/index.js";

describe('Cerrar sesión', () => {
  it('debería ser una función', () => {
    expect(typeof exit).toBe('function');
  });
  it('Deberia poder cerrar sesion', (done) => {
	exit()
	.then((user) => {
		expect(user).toBe(undefined)
		done()
	})
})
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
	it('Deberia poder iniciar sesion con Google', (done) => {
		googleLogin()
		.then((user) => {
			expect(user.providerData[0].providerId).toBe('google.com')
			done()
		})
		
	})
});

describe('Login de Usuarios con Facebook', () => {
	it('deberia ser una funcion', () => {
		expect(typeof facebookLogin).toBe('function');
	});
	it('Deberia poder iniciar sesion con Facebook', (done) => {
		facebookLogin()
		.then((user) => {
			expect(user.providerData[0].providerId).toBe('facebook.com')
			done()
		})
		
	})
});

