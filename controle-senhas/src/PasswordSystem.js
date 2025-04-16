export class PasswordSystem {
    constructor() {
      this.reset();
    }
  
    generatePassword() {
      const newPassword = `A${String(this.counter + 1).padStart(3, '0')}`;
      this.counter++;
      this.allPasswords.push(newPassword);
      this.pendingPasswords.push(newPassword);
      return newPassword;
    }
  
    callNext() {
      if (this.pendingPasswords.length === 0) return null;
      const next = this.pendingPasswords.shift();
      this.attendedPasswords.push(next);
      this.current = next;
      return next;
    }
  
    getCurrent() {
      return this.current;
    }
  
    getAllPasswords() {
      return [...this.allPasswords];
    }
  
    getPendingPasswords() {
      return [...this.pendingPasswords];
    }
  
    getAttendedPasswords() {
      return [...this.attendedPasswords];
    }
  
    getTotalGenerated() {
      return this.allPasswords.length;
    }
  
    getTotalAttended() {
      return this.attendedPasswords.length;
    }
  
    getTotalPending() {
      return this.pendingPasswords.length;
    }
  
    reset() {
      this.counter = 0;
      this.allPasswords = [];
      this.pendingPasswords = [];
      this.attendedPasswords = [];
      this.current = null;
    }
  }
  