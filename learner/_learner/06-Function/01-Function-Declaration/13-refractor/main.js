

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm("Did parents allow you?");
    }
    return confirm("Did parents allow you?")

//#2
    return age > 18 ? true : confirm("Did parents allow you?")


    //#3
    return age > 18 || : confirm("Did parents allow you?")


  }