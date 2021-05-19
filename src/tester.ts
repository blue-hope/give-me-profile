import { SNSList, SNSRegex } from ".";

function tester(sns: SNSList, identifier: string) {
  return SNSRegex(sns).test(identifier);
}

export default tester;
