export function formatBinary(value, groupSize = 4) {
  const clean = value.replace(/^0b/i, '').replace(/\s/g, '')
  const padded = clean.padStart(Math.ceil(clean.length / groupSize) * groupSize, '0')
  const groups = []
  for (let i = 0; i < padded.length; i += groupSize) {
    groups.push(padded.substring(i, i + groupSize))
  }
  return '0b' + groups.join(' ')
}

export function formatHex(value) {
  const clean = value.replace(/^0x/i, '').toUpperCase()
  return '0x' + clean
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${String(secs).padStart(2, '0')}`
}

export function formatDate(isoString) {
  const d = new Date(isoString)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

export function formatPercentage(value, total) {
  if (total === 0) return '0%'
  return Math.round((value / total) * 100) + '%'
}

export function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
