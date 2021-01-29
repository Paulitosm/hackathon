import React, {useState} from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input 
                type='text' 
                className='form control' 
                placeholder='Search Characters'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
                style = {{marginBottom: '50px'}}
                />
            </form>
        </section>
    )
}

export default Search
