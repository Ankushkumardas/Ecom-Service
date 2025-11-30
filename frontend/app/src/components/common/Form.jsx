import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button';

const Form = ({ formcontrols, buttontext, setformdata, formdata = {}, onsubmit }) => {
  const renderInputByContentType = (getcontrols) => {
    let element = null;
    const value = formdata[getcontrols.name] || ""
    switch (getcontrols.componentype) {
      case 'input':
        element = <Input name={getcontrols.name} placeholder={getcontrols.placeholder} type={getcontrols.type} value={value} onChange={e=>setformdata({...formdata,[getcontrols.name]:e.target.value})}/>
        break;
      case 'select':
        element = (
          <select
            name={getcontrols.name}
            value={value}
            onChange={e => setformdata(prev => ({ ...prev, [getcontrols.name]: e.target.value }))}
          >
            <option value="" disabled>
              {getcontrols.placeholder || 'Select an option'}
            </option>
            {Array.isArray(getcontrols.options) &&
              getcontrols.options.map((opt, i) => (
                <option key={opt.value || i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </select>
        );
        break;
      default:
        element = <Input name={getcontrols.name} placeholder={getcontrols.placeholder} type={getcontrols.type} value={value}  onChange={e=>setformdata({...formdata,[getcontrols.name]:e.target.value})}/>
        break;
    }
    return element;
  }
  return (
    <div>
      <form onSubmit={onsubmit}>
        <fieldset className='flex flex-col gap-4 '>
          {formcontrols.length > 0 ? (
            formcontrols.map((item, idx) => (
              <div key={item.name || idx} className='flex flex-col gap-1'>
                <Label htmlFor={`form-input-${item.name || idx}`}>{item.label}</Label>
                {renderInputByContentType(item)}
              </div>
            ))
          ) : (
            <div>No form fields to display.</div>
          )}
        </fieldset>
        <div className=' flex items-center justify-center mt-3'>

          <Button type='submit'>{buttontext || "Submit"}</Button>
        </div>
      </form>
    </div>
  );
};

export default Form
