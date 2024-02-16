export default {
  name: 'components',
  connector: 'mainJSONDatabase',
  visible: true,
  properties: [
    {
      name: 'id',
      type: 'number',
      isPk: true,
    },
    {
      name: 'type',
      type: 'string',
    },
    {
      name: 'friendlyName',
      type: 'string',
    },
    {
      name: 'props',
      type: 'string'
    },
    {
      name: 'parentPageId',
      type: 'number',
      backoffice: {
        label: 'Parent Id'
      }
    },
    {
      name: 'order',
      type: 'number',
    },    
    {
      name: 'parentComponentId',
      type: 'number',
      backoffice: {
        label: 'Parent Component Id'
      }
    }
  ],
  relations: [
    {
      type: '1:n',
      foreignKey: 'parentComponentId',
      remoteEntity: 'components',
    },
    {
      type: 'n:1',
      foreignKey: 'parentPageId',
      remoteEntity: 'pages',
    },
    {
      type: 'n:1',
      foreignKey: 'parentComponentId',
      remoteEntity: 'components',
    }
  ],
  backoffice: {
    label: 'Components',
  }
}
