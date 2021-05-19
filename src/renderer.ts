import { SNSList, SNSRegex, InvalidIdentifierException } from ".";

const url = {
  [SNSList.FACEBOOK_USERNAME]: (id: string) => `https://www.facebook.com/${id}`,
  [SNSList.FACEBOOK_PROFILE]: (id: string) =>
    `https://www.facebook.com/profile.php?id=${id}`,
  [SNSList.INSTAGRAM]: (id: string) => `https://www.instagram.com/${id}/`,
  [SNSList.LINKEDIN]: (id: string) => `https://www.linkedin.com/in/${id}/`,
  [SNSList.STACKOVERFLOW]: (id: string) =>
    `https://stackoverflow.com/users/${id}`,
  [SNSList.GITHUB]: (id: string) => `https://github.com/${id}`,
  [SNSList.GITLAB]: (id: string) => `https://gitlab.com/${id}`,
  [SNSList.MEDIUM_PREFIX]: (id: string) => `https://${id}.medium.com`,
  [SNSList.MEDIUM_SUFFIX]: (id: string) => `https://medium.com/${id}`,
  [SNSList.YOUTUBE_USER]: (id: string) => `https://www.youtube.com/user/${id}`,
  [SNSList.YOUTUBE_CHANNEL]: (id: string) =>
    `https://www.youtube.com/channel/${id}`,
};

function renderer(
  sns: SNSList,
  identifier: string,
  throwError: boolean = false
): string | null {
  if (SNSRegex(sns).test(identifier)) {
    return url[sns](identifier);
  } else if (throwError) {
    throw new InvalidIdentifierException(sns, identifier);
  } else {
    return null;
  }
}

export default renderer;
