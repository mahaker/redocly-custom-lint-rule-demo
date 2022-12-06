const report = (newLocation) => ({
  message: 'type: number is not allowed',
  suggest: ['type: integer', 'format: int32 or int64'],
  location: newLocation,
})

function NoTypeNumber() {
  return {
    Parameter: {
      skip({ schema }) {
        return !schema || !schema.type || schema.type !== 'number'
      },
      enter(parameter, ctx) {
        ctx.report(report(ctx.location.child(['name']).key()))
      },
    },
    SchemaProperties(properties, ctx) {
      Object.keys(properties).forEach(k => {
        if (properties[k].type === 'number')
          ctx.report(report(ctx.location.child([k]).key()))
      })
    }
  }
}

module.exports = NoTypeNumber

