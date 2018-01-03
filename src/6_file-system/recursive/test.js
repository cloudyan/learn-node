import {
  find,
  findSync,
} from 'finder'

console.log(findSync(/file.*/, '.'))
find(/file.*/, '.', console.log)
