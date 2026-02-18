import { IconCheck } from '../UI/BitIcons.jsx'

export default function MultipleChoice({ options, selected, onSelect, disabled, showCorrect }) {
  return (
    <div className="mcq-options" role="radiogroup">
      {options.map((option, i) => {
        let optionClass = 'mcq-option'
        if (selected === option.value) optionClass += ' selected'
        if (showCorrect && option.correct) optionClass += ' correct'
        if (showCorrect && selected === option.value && !option.correct) optionClass += ' incorrect'

        return (
          <button
            key={i}
            className={optionClass}
            onClick={() => !disabled && onSelect(option.value)}
            disabled={disabled}
            role="radio"
            aria-checked={selected === option.value}
          >
            <span className="mcq-option-label">
              {showCorrect && option.correct && <IconCheck size={14} />}
              {!showCorrect && String.fromCharCode(65 + i)}
            </span>
            <span>{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
