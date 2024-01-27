var criptografia = ['enter', "imes", "ai", "ober", "ufat"]
var letras = ["e", "i", "a", "o", "u"]

function getTextArea() {
    return document.getElementById("textarea").value
}

function getParagraph() {
    return document.getElementById("criptrografado")
}




function handleInnerHTML(varicao) {
    let paragraph = getParagraph()
    if (handle_Check(varicao))
    {
    paragraph.innerHTML += varicao
    }
    if (varicao == "clean") {
        paragraph.innerHTML = ""
    }

}

function handle_Class() {
    let mensagem = document.getElementById("nenhuma_mensagem_encontrada")
    mensagem.setAttribute('class', 'none');

    let button = document.getElementById("copy")
    button.removeAttribute('class', 'none')
    button.setAttribute('class', 'button_secondary')
    button.classList.add('button_tertiary')
   

    let img = document.getElementById("picture")
    img.setAttribute('class', 'none')

    let p_deletar = document.getElementById("p_deletar")
    p_deletar.setAttribute('class', 'none')
    
    let paragraph = getParagraph()
    paragraph.setAttribute('class', 'section_mensagem_textArea');

}

function handle_Copy() {
    const paragraph = document.getElementById("criptrografado").value
    navigator.clipboard.writeText(paragraph)

}

function handle_Criptografar() {
    handle_Class()
    handleInnerHTML("clean")
    let textArea = getTextArea()
    for (let i = 0; i < textArea.length; i++) {
        if (textArea.charAt(i) == "e") {
            handleInnerHTML(criptografia[0])
        } else if (textArea.charAt(i) == "i") {
            handleInnerHTML(criptografia[1])
        } else if (textArea.charAt(i) == "a") {
            handleInnerHTML(criptografia[2])
        } else if (textArea.charAt(i) == "o") {
            handleInnerHTML(criptografia[3])
        } else if (textArea.charAt(i) == "u") {
            handleInnerHTML(criptografia[4])
        }else if(textArea.charAt(i) == "[a]"){

        } 
        else {
            handleInnerHTML(textArea.charAt(i))
        }
    }
}

function handle_Descriptografar() {
    handleInnerHTML("clean")
    handle_Class()
    let textArea = getTextArea()

    for (let i = 0; i < textArea.length; i++) {
        //Enter
        if (textArea.charAt(i) == "e" && textArea.charAt(i + 1) == "n" && textArea.charAt(i + 2) == "t" && textArea.charAt(i + 3) == "e" && textArea.charAt(i + 4) == "r") {
            i += 4
            handleInnerHTML(letras[0])

        }
        else if (textArea.charAt(i) == "i" && textArea.charAt(i + 1) == "m" && textArea.charAt(i + 2) == "e" && textArea.charAt(i + 3) == "s") {
            i += 3
            handleInnerHTML(letras[1])
        }
        else if (textArea.charAt(i) == "a" && textArea.charAt(i + 1) == "i") {
            i++
            handleInnerHTML(letras[2])

        }
        else if (textArea.charAt(i) == "o" && textArea.charAt(i + 1) == "b" && textArea.charAt(i + 2) == "e" && textArea.charAt(i + 3) == "r") {
            i += 3
            handleInnerHTML(letras[3])

        }
        else if (textArea.charAt(i) == "u" && textArea.charAt(i + 1) == "f" && textArea.charAt(i + 2) == "a" && textArea.charAt(i + 3) == "t") {
            i += 3
            handleInnerHTML(letras[4])
        } else {
            handleInnerHTML(textArea.charAt(i))
        }

    }
}

function handle_Check (i){
    let anscii = i

    if(anscii.charCodeAt(0) >= 97 && anscii.charCodeAt(0) <= 122){
        return true
    }else if(anscii.charCodeAt(0) == 32){
        return true
    } 
    else {
        return false
    }
        
    

}