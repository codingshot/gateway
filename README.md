# NEAR Discovery (BOS) - 💧 GenaDrop

This repo is the Blockchain Operating System version of GenaDrop only on NEAR

## Setup & Development

Initialize repo:
```
yarn
```

Start development version:
```
yarn start
```

## Component example

Profile view 

```jsx
let accountId = props.accountId || "eugenethedream";
let profile = socialGetr(`${accountId}/profile`);

(
  <div>
    <img src={profile.image.url}/>
    <span>{profile.name}</span> <span>(@{accountId})</span>
  </div>
);
```


Profile editor 

```jsx
let accountId = context.accountId;

if (!accountId) {
  return "Please sign in with NEAR wallet";
}

const profile = socialGetr(`${accountId}/profile`);

if (profile === null) {
  return "Loading";
}

initState({
  name: profile.name,
  url: profile.image.url,
});

const data = {
  profile: {
    name: state.name,
    image: {
      url: state.url,
    },
  },
};

return (
  <div>
    <div>account = {accountId}</div>
    <div>
      Name:
      <input type="text" value={state.name} />
    </div>
    <div>
      Image URL:
      <input type="text" value={state.url} />
    </div>
    <div>Preview</div>
    <div>
      <img src={state.url} alt="profile image" /> {state.name}
    </div>
    <div>
      <CommitButton data={data}>Save profile</CommitButton>
    </div>
  </div>
);

```
# Fork the Components
While the gateway leverages existing components deployed under bos.genadrop.near, you may want to also customize the underlying components with your own brand.

Go to our mono repo to fork and deploy all of our componetns including Mintbase, CPlanet, and GenaDrop Multichain here https://github.com/GenaDrop/genadrop-bos-monorepo
