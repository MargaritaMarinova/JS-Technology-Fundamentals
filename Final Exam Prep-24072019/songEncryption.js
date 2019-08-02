function solve(input) {

    for (const line of input) {
      if (line === 'end') {
        break;
      }//прекъсва цикъла при команда енд
  
      let [ artist, song ] = line.split(':');
  
      if (!/^[A-Z][a-z\s\']+$/g.test(artist) || !/^[A-Z\s]+$/g.test(song)) {
        console.log('Invalid input!');
        continue;
      }//проверява ако певецът или песента НЕ отговарят на условията, извежда команда за грешка
  
      let key = artist.length;//присвоява за ключ дължината на името на изпълнителя
      let encryptedString = '';//създава нов стринг, за да пазим енкриптираните символи (артист и песен наведнъж)
      for (const char of line) {
        if (char === ':') {
          encryptedString += '@';
          continue;
        }//заменя символа : с @
  
        let asciiCode = char.charCodeAt(0);//присвоява стойността от аски таблицата на нова променлива
        if ((asciiCode >= 65 && asciiCode <= 90)) {
          asciiCode += key;//проверява дали е в интервала на малките букви и ако да, му добавя стойността на ключа
          if (asciiCode > 90) {
            asciiCode -= 26;
          }//ако стойността надвишава голямо Z, тогава изважда от него 26, за да го върне отначало
        } 
  
        if ((asciiCode >= 97 && asciiCode <= 122)) {
          asciiCode += key;
          if (asciiCode > 122) {
            asciiCode -= 26;
          }//проверва по същия начин за големите букви;
        } 
  
        encryptedString += String.fromCharCode(asciiCode);//обръща новата аски стойност в символ и го долепя до енкриптирания стринг;
      }
  
      console.log(`Successful encryption: ${encryptedString}`);
    }
  }
  
  // solve(
  // [
  //   'Eminem:VENOM',
  //   'Linkin park:NUMB',
  //   'Drake:NONSTOP',
  //   'Adele:ROLLING IN THE DEEP',
  //   'end'
  // ]
  // );
  
  // solve([
  //   'Michael Jackson:ANOTHER PART OF ME',
  //   'Adele:ONE AND ONLY',
  //   'Guns n\'roses:NOVEMBER RAIN',
  //   'Christina Aguilera: HuRt',
  //   'end'
  // ])