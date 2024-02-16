export default {
  name: 'pages',
  connector: 'mainJSONDatabase',
  visible: true,
  relations: [
    {
      type: '1:n',
      foreignKey: 'parentPageId',
      remoteEntity: 'components',
    }
  ],
  properties: [
    {
      name: 'id',
      type: 'number',
      isPk: true,
    },
    {
      name: 'friendlyName',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    }
  ],
  backoffice: {
    label: 'Pages',
  }
}