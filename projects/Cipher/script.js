document.getElementById("encode-button").addEventListener("click", encode)
document.getElementById("decode-button").addEventListener("click", decode)

// -- full functions --

function encode() {
    var input = document.getElementById("input").value
    var output = edCipher(input, true)
    document.getElementById("output").value = output
}

function decode() {
    var input = document.getElementById("input").value
    var output = edCipher(input, false)
    document.getElementById("output").value = output
}

// -- helper functions --

function edCipher(input, direction) {
    str = input.toLowerCase().split("").filter(x=>/[A-Za-z]/.test(x))
    for (let i = 0; i < str.length; i++) {
        if (i%2) {
            if (direction) {
                str[i] = cipher(str[i], letterToNumber(str[i-1]))
            } else {
                str[i] = cipher(str[i], 26 - letterToNumber(str[i-1]))
            }
        }
    }
    return str.join("")
}

// ciphers each individual letter
function cipher(s, k) {
    return s.replace(/[a-z]/gi, m => {
      const c = m < "a" ? 65 : 97;
      return String.fromCharCode((m.charCodeAt(0) - c + k) % 26 + c)
    });
  }


// gets the number for each letter
function letterToNumber(letter) {
    return letter.charCodeAt(0) - 96
}