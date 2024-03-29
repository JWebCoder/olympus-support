export default {
  name: 'pages',
  connector: 'mainJSONDatabase',
  visible: true,
  relations: [
    {
      type: '1:n',
      foreignKey: 'parentPageId',
      remoteEntity: 'components',
    },
    {
      type: 'n:1',
      foreignKey: 'parentProjectId',
      remoteEntity: 'projects',
    },
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
    },
    {
      name: 'parentProjectId',
      type: 'number',
      backoffice: {
        label: 'Project Id'
      }
    },
  ],
  backoffice: {
    label: 'Pages',
  }
}