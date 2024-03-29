import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Apartment',
  'Townhome'
]

export const rentalPropertyType = ([propertyType]) => {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community'
  }
  return 'Standalone'
}

export default helper(rentalPropertyType)