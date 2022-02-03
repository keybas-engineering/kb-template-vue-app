import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// Explicitely declare all icons used in the project
// Required to keep bundle size low (FontAwesome is 34 kB + 2 kB per icon)
// Icon library: https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free
library.add(faHome);

// See reference: https://github.com/FortAwesome/vue-fontawesome#features
export { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
