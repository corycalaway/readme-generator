const choosealicenseList = require('choosealicense-list')

var testSubject = document.getElementById('testing1')

const testFunction = () => {
    console.log(choosealicenseList.MIT)
    console.log(testSubject)
}

testFunction()