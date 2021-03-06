import Return from './Return';

class Error extends Return {
  constructor (message: string, code?: number, identifier?: string) {
    super(false, code || 400, message || 'It seems like we are facing an error. Please check your informations and try again on few seconds.', undefined, false, identifier);
  }
}

class RequiredFieldError extends Error {
  constructor (field: string) {
    super(field + ' is required.', 400, 'RequiredField');
  }
}

class InvalidFieldError extends Error {
  constructor (field: string, reason?: string) {
    const defaultCode = 402;
    const defaultIdentifier = 'InvalidField';

    if (reason) {
      super(field + ' ' + reason, defaultCode, defaultIdentifier);
    } else {
      super(field + ' is invalid.', defaultCode, defaultIdentifier);
    }
  }
}

class IncorrectPassword extends Error {
  constructor () {
    const defaultCode = 402;
    const defaultIdentifier = 'IncorrectPassword';

    super('Password is invalid.', defaultCode, defaultIdentifier);
  }
}

class InexistentEntryError extends Error {
  constructor (entry: string, message?: string) {
    const defaultCode = 404;
    const defaultIdentifier = 'InexistentEntry';

    if (message) {
      super(entry + ' ' + message, defaultCode, defaultIdentifier);
    } else {
      super(entry + ' was not found.', defaultCode, defaultIdentifier);
    }
  }
}

class DuplicatedEntryError extends Error {
  constructor (entry: string, message?: string) {
    const defaultCode = 401;
    const defaultIdentifier = 'InexistentEntry';

    if (message) {
      super(entry + ' ' + message, defaultCode, defaultIdentifier);
    } else {
      super(entry + ' was already registered.', defaultCode, defaultIdentifier);
    }
  }
}

class RemoveError extends Error {
  constructor (entry: string, message?: string) {
    const defaultCode = 405;
    const defaultIdentifier = 'RemoveError';

    if (message) {
      super(entry + ' ' + message, defaultCode, defaultIdentifier);
    } else {
      super('It was not possible to remove ' + entry, defaultCode, defaultIdentifier);
    }
  }
}

class WrongInformationError extends Error {
  constructor (entry: string, message?: string) {
    const defaultCode = 402;
    const defaultIdentifier = 'WrongInfo';

    if (message) {
      super(entry + ' ' + message, defaultCode, defaultIdentifier);
    } else {
      super(entry + ' is wrong.', defaultCode, defaultIdentifier);
    }
  }
}

export {
  Error,
  RequiredFieldError,
  InvalidFieldError,
  InexistentEntryError,
  DuplicatedEntryError,
  RemoveError,
  IncorrectPassword,
  WrongInformationError
};
