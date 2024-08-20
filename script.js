const btn = document.getElementById('btn')
const salida = document.getElementById('salida')
const mayus = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const minus = 'abcdefghijklmnñopqrstuvwxyz'
const nums = '0123456789'
const simbolos = '!@#$%^&*()_+{}":?><'

function CharType(char) {
    if (mayus.indexOf(char) !== -1) return 'mayus'
    if (minus.indexOf(char) !== -1) return 'minus'
    if (nums.indexOf(char) !== -1) return 'nums'
    if (simbolos.indexOf(char) !== -1) return 'simbolos'
    return 'no reconocido'
}

function generateChar() {
    let tipo = Math.floor(Math.random() * 4)
    let char
    switch (tipo) {
        case 0:
            char = mayus[Math.floor(Math.random() * mayus.length)]
            break
        case 1:
            char = minus[Math.floor(Math.random() * minus.length)]
            break
        case 2:
            char = nums[Math.floor(Math.random() * nums.length)]
            break
        case 3:
            char = simbolos[Math.floor(Math.random() * simbolos.length)]
            break
    }
    return char
}

function generatePassword(length) {
    if (length < 4) {
        return 'La contraseña debe tener al menos 4 caracteres'
    }
    let contra = ''
    let i = 0
    let incluidos = []
    let char
    while (i < length) {
        char = generateChar()
        if (length - i < 4 && incluidos.length < 4) {
            while(incluidos.indexOf(CharType(char)) !== -1) {
                char = generateChar()
            }
        }
        if (incluidos.indexOf(CharType(char)) === -1) {
            incluidos.push(CharType(char))
        }
        contra += char
        i++
    }
    return contra
}

btn.addEventListener('click', () => {
    let length = document.getElementById('largo').value
    salida.innerHTML = generatePassword(length)
})
