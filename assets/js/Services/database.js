import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const __lsExists = (newlist, name) => {
	// Comprobamos que no este en sessionStorage
	const listExist = (sessionStorage.getItem(name) === null)
	// Verificamos
	if(listExist) sessionStorage.setItem(name, newlist)
	// Mostramos la lista como un array
	return listExist ? JSON.parse(newlist) : JSON.parse(sessionStorage.getItem(name))
}

/**
 * =============================
 * 	CATEGORIAS
 * =============================
*/
export const categorias = __lsExists(JSON.stringify([
	{
		"nombre":"Star Wars", 
		"seo":"star_wars"
	}, {
		"nombre":"Consolas", 
		"seo":"consolas"
	}, {
		"nombre":"Diversos", 
		"seo":"diversos"
	}
]), 'categories')

/**
 * =============================
 * 	PRODUCTOS
 * =============================
*/
const totalP = 6;
const myArray = []
const etiquetas = [
	['star', 'wars', 'collection'],
	['games', 'users', 'consoles'],
	['game', 'short', 'doll', 'switch']
]
categorias.forEach( (categoria, ind) => {
	for(let int = 1; int <= totalP; int++) {
		let price = Math.floor(Math.random() * 999)
		const myObj = {
			// ID automatico
			"id": uuidv4().split('-')[0],
			// Ruta de imagen
			"thumbnail": `./assets/img/${categoria.seo}/producto_00${int}.png`,
			"image": `./assets/img/${categoria.seo}/producto_00${int}.jpg`,
			// Titulo
			"title": `${categoria.nombre} 00${int}`,
			// Descripción
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			// Precio
			"price": `$${price}.00`,
			// Etiquetas
			"tags": etiquetas[ind],
			// Categoria
			"category": categoria.seo
		}
		myArray.push(myObj)
	}
})
export const productos = __lsExists(JSON.stringify(myArray), 'products')

/**
 * =============================
 * 	USUARIOS
 * =============================
*/
export const usuarios = __lsExists(JSON.stringify([
	{
		"id": "1",
		"name": "ElCejas",
		"password": "ElCejas22",
		"email": "elcejas@mimail.com"
	}, {
   	"id": "2",
		"name": "giosanArt",
		"email": "aluraelcejas@mimail.com",
		"password": "9uQFF1Lh"
		},	{
		"id": "3",
		"name": "christmas",
		"email": "elcejasalura@mimail.com",
		"password": "CQutx25i8r"
		},	{
		"id": "4",
		"name": "ayayuda",
		"email": "elaluracejas@mimail.com",
		"password": "OWsTbMUgFc"
		},	{
		"id": "5",
    "name": "aaron64",
		"email": "elcejasalura22@mimail.com",
		"password": "sRQxjPfdS"
	}
]), 'users')