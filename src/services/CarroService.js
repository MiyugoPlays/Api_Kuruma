// Depois cria aqui com base no controller. Primeiro controller depois service
const db = require('../db')

db.query

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros', (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            })
        })
        
    },

    inserir: (modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)',
                [modelo, placa],
                (error, results)=>{
                    if(error){
                        rejeitado(error)
                        return
                    }
                    aceito(results.insertCodigo) //insertID
                }
            )
        })
    },
    
    buscarUm: (codigo) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM carros WHERE codigo = ?',
                [codigo],
                (error, results) =>{
                    if(error){
                        rejeitado(error)
                        return
                    }
                    if(results.length > 0){ //verifica se retornou mais de 1 e pega o 1
                        aceito(results[0])
                    }else{
                        aceito(false)
                    }
                }
            )
        })
    },

    alterar: (codigo, modelo, placa) =>{
        return new Promise((aceito, rejeitado)=> {

            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
                [modelo, placa, codigo],
                (error, results) => {
                    if(error){
                        rejeitado(error)
                        return
                    }
                    aceito(results)
                }
            )
        })
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) =>{

            db.query('DELETE FROM carros WHERE codigo = ?',
                [codigo],
                (error, results) =>{
                    if(error){
                        rejeitado(error)
                        return
                    }
                    aceito(results)
                }
            )
        })
    }
}