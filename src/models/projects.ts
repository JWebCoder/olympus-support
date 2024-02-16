export default {
  name: 'projects',
  connector: 'mainJSONDatabase',
  visible: true,
  relations: [
    {
      type: '1:n',
      foreignKey: 'parentProjectId',
      remoteEntity: 'pages',
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
    label: 'Projects',
  }
}