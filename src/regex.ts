import { SNSList } from ".";

function regex(sns: SNSList): RegExp {
  switch (sns) {
    case SNSList.FACEBOOK_USERNAME:
      return /^(?!.*\.(?:com|net))[A-Z0-9.]{5,}$/i;
    case SNSList.FACEBOOK_PROFILE:
      return /^(\d.*)$/;
    case SNSList.INSTAGRAM:
      return /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;
    case SNSList.LINKEDIN:
      return /^[\w\-\_À-ÿ%]+$/;
    case SNSList.STACKOVERFLOW:
      return /^[0-9]+$/;
    case SNSList.GITHUB:
      return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    case SNSList.GITLAB:
      return /^(?=.{2,255}$)(?!\-)[a-z\d\-\_\.]*(?<!(\.)|(\.git)|(\.atom))$/i;
    case SNSList.MEDIUM_PREFIX:
      return /^([A-z0-9]+)$/;
    case SNSList.MEDIUM_SUFFIX:
      return /^\@([A-z0-9]+)$/;
    case SNSList.YOUTUBE_USER:
      return /^[A-z0-9]+$/;
    case SNSList.YOUTUBE_CHANNEL:
      return /^[A-z0-9-\_]+$/;
  }
}

export default regex;
