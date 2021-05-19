import { SNSList, SNSRegex } from ".";

interface IInvalidIdentifierException {
  value: string;
  regex: RegExp;
}

export class InvalidIdentifierException
  extends Error
  implements IInvalidIdentifierException
{
  value: string;
  regex: RegExp;
  constructor(sns: SNSList, identifier: string) {
    super(
      `${identifier} does not match for ${sns}'s regex ${SNSRegex(
        sns
      ).toString()}`
    );
    this.name = "InvalidIdentifierException";
    this.value = identifier;
    this.regex = SNSRegex(sns);
  }
}
