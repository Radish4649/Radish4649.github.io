document.getElementById("button").addEventListener("click", translate)

function translate() {
    var input = document.getElementById("input").value
    var output = cipher(input, 13)
    document.getElementById("output").value = output
}



function cipher(s, k) {
    return s.replace(/[a-z]/gi, m => {
      const c = m < "a" ? 65 : 97;
      return String.fromCharCode((m.charCodeAt(0) - c + k) % 26 + c)
    });
  }