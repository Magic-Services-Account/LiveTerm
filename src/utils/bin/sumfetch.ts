import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'MagicLike') {
    return `                                                  
############(((((((((###%%%%%%%%%%%%%##    sumfetch
###%%%%%%/*,.,((((((######%%%%%%%%%####   -----------
%%%%%%%%.(&&%//**,//%(######%%%########    ABOUT
%%%%& **//(&#(/(*&/*,&&############((((    ${config.name}
%%,****//(#(#(&&&&#&(#&@#*######(((((((    <u><a href="${config.website}" target="_blank">Website</a></u>
###(%%%%%%%%%%%/%#%(###&&@(&#*.,@@,&###   爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
###############/%*/%%,(&&&##%%.*##### ,   -----------
((((((###########(&#/,*#(%&&&#,%**/*//*    CONTACT 
#################.%&&&(&((#(%(%%%**/(((    <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
###*,,*(**&%//@#@%######(#((((%(*(%**((    <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
..,*%((/((((((##(##((((&&#(((((@&&*//(%     <u><a href="https://codeberg.org/${config.social.codeberg}" target="_blank">codeberg.org/${config.social.codeberg}</a></u>
(*(/(/(((#(#((#(((//////((#/%%%#%(%./%%   -----------
((((%**/#&%(//#((##%#//(&%%(/&%&%%%//##    DONATE 
((/(#*(#(##%#@@/%%%%*/(%%%%%#(//@%&.##(    <u><a href="${config.donate_urls.donate_website}" target="_blank">${config.donate_urls.donate_website}</a></u>
(############%%%#%(%/(#%%%%%%&.## (###(     <u><a href="${config.donate_urls.doge}" target="_blank">${config.donate_urls.doge}</a></u>
##########%%%%%%%%#(/(%&&&&&&%%%%%%%###     <u><a href="${config.donate_urls.bitcoin}" target="_blank">${config.donate_urls.bitcoin}</a></u>
########%%%%%%%%%%%&&&&&&&&&&&&&&%%%%##

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.website}" target="_blank">Website</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://codeberg.org/in/${config.social.codeberg}" target="_blank">linkedin.com/in/${config.social.codeberg}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.donate_urls.donate_website}" target="_blank">${config.donate_urls.donate_website}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                    <u><a href="${config.donate_urls.doge}" target="_blank">${config.donate_urls.doge}</a></u>
                                              <u><a href="${config.donate_urls.bitcoin}" target="_blank">${config.donate_urls.bitcoin}</a></u>

`;
  }
};

export default sumfetch;
