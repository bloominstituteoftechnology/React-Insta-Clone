const SearchBar = () => {
  return (
    <Page>
      <Navbar backLink="Back" title="Searchbar" sliding />
      <Searchbar
        cancelLink="Cancel"
        searchList="#search-list"
        onSearchbarSearch={onSearchFunction}
        onSearchbarEnable={onEnableFunction}
        onSearchbarDisable={onDisableFunction}
        onSearchbarClear={onClearFunction}
      />
      <List className="searchbar-not-found">
        <ListItem title="Nothing found" />
      </List>
      <List className="searchbar-found" id="search-list">
      {
        Array.apply(null, Array(100)).map((item, index) => {
          return (<ListItem  key={index} title={`Item ${index + 1}`} />);
        })
      }
      </List>
    </Page>
  );
};
