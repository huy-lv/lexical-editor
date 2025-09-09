/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, {useRef, useEffect} from 'react';

export function MultipleChoiceInput({
  value,
  onChange,
  choices,
  onChoicesChange,
}) {
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [choices]);

  const handleTextareaChange = (e) => {
    onChoicesChange(e.target.value.split('\n'));
    adjustTextareaHeight();
  };

  return (
    <div
      style={{display: 'flex', flexDirection: 'column', paddingBottom: '4px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <span>Câu</span>
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
            style={{
              width: '25px',
              padding: '2px',
              border: '1px solid #ccc',
              borderRadius: '2px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          />
        </div>
        <p style={{fontSize: '12px', margin: 0, lineHeight: 1.3}}>
          Multiple{'\n'}Choice
        </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <textarea
          ref={textareaRef}
          value={choices.join('\n')}
          onChange={handleTextareaChange}
          style={{
            padding: '4px',
            border: '1px solid #ccc',
            borderRadius: '2px',
            fontSize: '12px',
            resize: 'none',
            overflow: 'hidden',
          }}
        />
      </div>
    </div>
  );
}
