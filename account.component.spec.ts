import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [FormsModule], 
    });

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should transfer money successfully when input is valid', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const component = fixture.componentInstance;
    
    // Initialize user's balance
    component.user.balance = 1000;
  
    // Set valid input values
    component.recipientAccountNumber = '350155';
    component.transferAmount = 500;
    component.transferNote = 'Test transfer';
  
    component.transferMoney();
  
    expect(component.user.balance).toBe(500);
    expect(component.transactionHistory.length).toBe(1);
    expect(component.errorMessage).toBe('');
  });
  
  it('should show an error message for insufficient balance', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const component = fixture.componentInstance;
  
    // Initialize user's balance
    component.user.balance = 100;
  
    // Set recipient account number and transfer amount that exceeds the balance
    component.recipientAccountNumber = '350155';
    component.transferAmount = 150;
    component.transferNote = 'Test transfer';

    component.transferMoney();
  
    // Assert that the balance is not updated
    expect(component.user.balance).toBe(100);
    expect(component.transactionHistory.length).toBe(0);
    expect(component.errorMessage).toBe('Insufficient balance');
  });
  
});
