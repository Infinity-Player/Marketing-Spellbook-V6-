import React from 'react'
export default function Topbar({user, onLogout, toggleDark, dark, quickNew}){
  return (
    <div className="topbar">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold">Marketing Spellbook Ultimate</h2>
        <span className="small-muted">Build full campaigns from one brief</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn btn-ghost" onClick={quickNew}>New Brief</button>
        <button className="btn btn-ghost" onClick={toggleDark}>{dark ? 'Light' : 'Dark'}</button>
        {user ? <><span className="small-muted">{user.email}</span><button className="btn" onClick={onLogout}>Logout</button></> :
          <a href="#/auth" className="btn btn-primary">Sign in</a>}
      </div>
    </div>
  )
}
