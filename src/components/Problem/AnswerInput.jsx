export default function AnswerInput({ field, value, onChange, disabled, status }) {
  const inputClass = `input-field ${status === 'correct' ? 'input-success' : ''} ${status === 'incorrect' ? 'input-error' : ''}`

  if (field.inputType === 'multiline') {
    return (
      <div className="input-group">
        {field.label && <label className="input-label">{field.label}</label>}
        <textarea
          className={inputClass}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder || ''}
          disabled={disabled}
          rows={4}
          aria-label={field.label || 'Answer'}
        />
      </div>
    )
  }

  return (
    <div className="input-group">
      {field.label && <label className="input-label">{field.label}</label>}
      <input
        type={field.inputType === 'number' ? 'number' : 'text'}
        className={inputClass}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={field.placeholder || ''}
        disabled={disabled}
        aria-label={field.label || 'Answer'}
      />
    </div>
  )
}
