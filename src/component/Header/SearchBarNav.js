import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import queryString from 'query-string';
import Autosuggest from 'react-autosuggest';
import * as dashboardActions from 'pages/dashboard/actions';

const SearchBox = styled.div`
  input {
    position: relative;
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 1px;
    text-transform: lowercase;
    z-index: 0;
    width: 100%;
    height: 60px;
    color: #c7c7c7;
    background: #fff;
    padding-left: 57px;
    background: rgba(241, 243, 244, 0.26);
    border: 1px solid rgba(0, 0, 8, 0.26);
    box-sizing: border-box;
    border-radius: 10px;
    &::placeholder {
      color: #c7c7c7;
    }
    &:focus {
      outline: none;
      + {
        .search {
          transform: perspective(400px) rotateY(89deg);
          padding: 3px 0;
          opacity: 0;
        }
      }
    }
  }
  height: 60px;
  img.search {
    height: auto;
    width: auto;
    border: none;
    position: relative;
    z-index: 1;
    left: 3%;
    top: -43px;
    transition: 0.2s all;
    transform-style: preserve-3d;
    perspective: 400px;
    &::after {
      content: '';
      display: block;
      width: auto;
      height: auto;
      background: #fff;
      position: absolute;
      left: calc(50% - 2px);
      border-radius: 10px;
      top: 101%;
    }
  }
`;
const LogoSection = styled.div`
  img {
    width: 75px;
  }
`;
const NavItem = styled.div`
	ul { display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	li { padding: 0 15px 13px;
	margin: 0 7px;
}
a {
	font-family: Roboto-Regular;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	color: #000;
}
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
		.activeNav {
			border-bottom: 3px solid #f5bf42;
		}
	}
}
li {
	&:last-child {
		margin: 0;
	}
}
`;
const LogInDropdown = styled(Dropdown)`
  button {
    background-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    padding: 0;
    &:active,
    &:focus,
    &:hover {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
  }
  .dropdown-menu {
    width
    border: 1px solid #ccc;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    color: #000;
    -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transform: translate(-124px, 54.667px) !important;
    ul {
      font-family: Roboto-Regular;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #000;
    }
  }
`;

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class SearchBarNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      isLoading: false,
    };

    this.loadSuggestions = debounce(this.loadSuggestions, 300);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let toReturn = null;

    if (
      nextProps.suggestions &&
      !isEqual(nextProps.suggestions, prevState.suggestions)
    ) {
      toReturn = Object.assign(toReturn || {}, {
        suggestions: nextProps.suggestions,
      });
    }

    return toReturn;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.value && prevState.value) {
      this.handleQueryChange('');
    }

    if (
      this.props.router.query &&
      !isEqual(this.props.router.query, prevProps.router.query) &&
      this.props.router.query.q
    ) {
      this.setState(
        {
          value: this.props.router.query.q,
        },
        this.handleQueryChange(this.props.router.query.q)
      );
    }
  }

  handleQueryChange = (value) => {
    if (
      this.props.handleQuery &&
      typeof this.props.handleQuery === 'function'
    ) {
      this.props.handleQuery(value);
    }

    const queryParams = queryString.stringify({
      ...this.props.router.query,
      q: value,
    });

    this.props.router.push(
      `${this.props.router.pathname}?${queryParams}`,
      undefined,
      {
        shallow: true,
      }
    );
  };

  loadSuggestions(value) {
    this.setState({
      isLoading: true,
    });
    this.props.listRecsAutoSuggestions({ pageSize: 10, query: value });
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    this.handleQueryChange(suggestionValue);
  };

  render() {
    const { profile } = this.props;
    const { value, suggestions, isLoading } = this.state;
    const inputProps = {
      type: 'text',
      placeholder: 'Search brands, categories or contacts',
      value,
      onChange: this.onChange,
    };

    const profilePicUrl = profile && profile.profilePicUrl;

    return (
      <Row className="align-items-center">
        <Col lg={2}>
          <Link href="/dashboard">
            <LogoSection>
              <img src="/imgs/svgs/rec-logo-blue.png" alt="logo-rec" />
            </LogoSection>
          </Link>
        </Col>
        <Col lg={6}>
          <SearchBox>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              onSuggestionSelected={this.onSuggestionSelected}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
            <img
              src="/imgs/svgs/search_icon.svg"
              id="icon"
              className="search searchicon-support"
            />
          </SearchBox>
        </Col>
        <Col lg={4} className="resposive-992">
          <NavItem>
            <ul>
              <li>
                <Link href="/my-recs">My Tags</Link>
              </li>
              <li>
                <Link href="/contacts">My Contacts</Link>
              </li>
              <li>
                <LogInDropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <img
                      src={profilePicUrl || '/imgs/default_profile_pic.jpg'}
                      alt="userImg"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </LogInDropdown>
              </li>
            </ul>
          </NavItem>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
    suggestions: state.dashboard.recsAutoSuggestions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(dashboardActions, dispatch);
};

const SearchBarNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarNav);

export default withRouter(SearchBarNavContainer);
