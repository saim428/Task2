class FormPage {
    constructor() {
      this.firstNameInput = '#firstName';
      this.lastNameInput = '#lastName';
      this.emailInput = '#userEmail';
      this.genderRadio = 'input[name="gender"][value="Male"]';
      this.mobileNumberInput = '#userNumber';
      this.dateOfBirthInput = '#dateOfBirthInput';
      this.subjectsInput = '.subjects-auto-complete__value-container';
      this.hobbiesCheckbox = 'input[type="checkbox"]';
      this.uploadPictureInput = '#uploadPicture';
      this.currentAddressInput = '#currentAddress';
      this.stateDropdown = '#state';
      this.cityDropdown = '#city';
      this.submitButton = '#submit';
      this.modalTitle = '#example-modal-sizes-title-lg';
      this.modalTable = 'tbody tr';
    }
  
    visit() {
      cy.visit('https://demoqa.com/automation-practice-form');
    }
  
    fillFirstName(firstName) {
      cy.get(this.firstNameInput).type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get(this.lastNameInput).type(lastName);
    }
  
    fillEmail(email) {
      cy.get(this.emailInput).type(email);
    }
  
    selectGender() {
      cy.get(this.genderRadio).check({ force: true });
    }
  
    fillMobileNumber(mobileNumber) {
      cy.get(this.mobileNumberInput).type(mobileNumber);
    }
  
    setDateOfBirth(month, year, day) {
      cy.get(this.dateOfBirthInput).click();
      cy.get('.react-datepicker__month-select').select(month);
      cy.get('.react-datepicker__year-select').select(year);
      cy.get(`.react-datepicker__day--0${day}`).first().click();
    }
  
    fillSubjects(...subjects) {
        subjects.forEach(subject => {
          cy.get(this.subjectsInput).type(subject);
          cy.contains('.subjects-auto-complete__menu-list', subject).click();
        });
    }
  
    selectHobbies(...hobbies) {
        hobbies.forEach(hobby => {
          cy.get(`${this.hobbiesCheckbox}[value="${hobby}"]`).check({ force: true });
        });
    }
  
    uploadPicture(filePath) {
      cy.get(this.uploadPictureInput).attachFile(filePath);
    }
  
    fillCurrentAddress(address) {
      cy.get(this.currentAddressInput).type(address);
    }
  
    selectState(state) {
      cy.get(this.stateDropdown).click().get('.css-26l3qy-menu').contains(state).click();
    }
  
    selectCity(city) {
      cy.get(this.cityDropdown).click().get('.css-26l3qy-menu').contains(city).click();
    }
  
    submitForm() {
      cy.get(this.submitButton).click({ force: true });
    }
  
    verifySubmission() {
      cy.get(this.modalTitle).should('have.text', 'Thanks for submitting the form');
  
      cy.get(this.modalTable).eq(0).find('td').eq(1).should('have.text', 'Saim Jahangir');
      cy.get(this.modalTable).eq(1).find('td').eq(1).should('have.text', 'saim.jahangir@arbisoft.com');
      cy.get(this.modalTable).eq(2).find('td').eq(1).should('have.text', 'Male');
      cy.get(this.modalTable).eq(3).find('td').eq(1).should('have.text', '3409646487');
      cy.get(this.modalTable).eq(4).find('td').eq(1).should('have.text', '23 May,1998');
      cy.get(this.modalTable).eq(5).find('td').eq(1).should('have.text', 'Maths, Computer Science, Physics');
      cy.get(this.modalTable).eq(6).find('td').eq(1).should('have.text', 'Sports, Reading, Music');
      cy.get(this.modalTable).eq(7).find('td').eq(1).should('have.text', 'image.png');
      cy.get(this.modalTable).eq(8).find('td').eq(1).should('have.text', 'ABC town Islamabad');
      cy.get(this.modalTable).eq(9).find('td').eq(1).should('have.text', 'Haryana Panipat');
    }
  }
  
  export default FormPage;
  