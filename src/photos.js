const photo = (name) => `${import.meta.env.BASE_URL}photos/${name}`

export const photos = {
  singingStage: photo('sveta-singing-red-stage.jpg'),
  singingSolo: photo('sveta-singing-red-solo-source.jpg'),
  fullBodyWhite: photo('sveta-fullbody-white.jpg'),
  lusya: photo('sveta-lusya-corgi.jpg'),
  maksim1: photo('sveta-maksim-studio-1.jpg'),
  maksim2: photo('sveta-maksim-studio-2.jpg'),
  prosecco: photo('sveta-prosecco-portrait.jpg'),
  phil: photo('sveta-phil-cat.jpg'),
  bedRemote: photo('sveta-bed-remote.jpg'),
  disco: photo('sveta-disco-selfie.jpg'),
  officeBlue: photo('sveta-office-blue.jpg'),
  partyTable: photo('sveta-party-table.jpg'),
}
