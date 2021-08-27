import moment from 'moment'

const t = new Date()
    const time = [
      moment(t).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
      moment(t.setDate(t.getDate() - 3)).format("DD.MM.YYYY"),
    ];
    time.reverse()

export const dataSort = (source) => {
      const res = []
    
      time.forEach(v => {
        const r = Math.random()
        res.push({
            name: v,
            uv: Math.round(r * source.gr_3.coeff) + source.gr_3.min,
        })
      })
    
      return res
}
    
