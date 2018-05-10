import freesewing from 'json-loader!~/assets/config/freesewing.yaml'
import mapping from 'json-loader!~/assets/config/mapping.yaml'
import measurements from 'json-loader!~/assets/config/measurements.yaml'
import namespaces from 'json-loader!~/assets/config/namespaces.yaml'
import patterns from 'json-loader!~/assets/config/patterns.yaml'
import versions from 'json-loader!~/assets/config/versions.yaml'

export default {
  ...freesewing,
  mapping,
  measurements,
  namespaces,
  patterns,
  versions
}

