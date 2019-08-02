function decryptCode(encrypted, length) {
    let decryptedCode = '';

    for (let i = 0; i < encrypted.length; i++) {
      let ascii = encrypted.charCodeAt(i);
      ascii += length;
      decryptedCode += String.fromCharCode(ascii);
    }

    console.log(decryptedCode);
  }

  decryptCode('ABC', 6);