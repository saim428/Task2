import FormPage from '../formpage/formpage';

describe('Automation Practice Form', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  const formPage = new FormPage();

  before(function () {
    cy.fixture('formData').then(function(data){
      this.data = data;
    });
  });

  it('Should fill out the form successfully and verify submitted data', function() {
    formPage.visit();

    formPage.fillFirstName(this.data.firstName);
    formPage.fillLastName(this.data.lastName);
    formPage.fillEmail(this.data.email);
    formPage.selectGender();
    formPage.fillMobileNumber(this.data.mobileNumber);
    formPage.setDateOfBirth(this.data.dateOfBirth.month, this.data.dateOfBirth.year, this.data.dateOfBirth.day);
    formPage.fillSubjects(this.data.subjects[0],this.data.subjects[1],this.data.subjects[2]);
    formPage.selectHobbies(...this.data.hobbies);
    formPage.uploadPicture(this.data.picture);
    formPage.fillCurrentAddress(this.data.currentAddress);
    formPage.selectState(this.data.state);
    formPage.selectCity(this.data.city);
    formPage.submitForm();
    formPage.verifySubmission();
  });
});
