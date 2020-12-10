import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import queryString from 'query-string';

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
      outline: $CommoneNone;
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
    top: -40px;
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
		width: 50px;
		height: 50px;
		border-radius: $border50;
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

function SearchBarNav(props) {
  const router = useRouter();
  const profile = useSelector((state) => state.user.profile);
  const profilePicUrl = profile && profile.profilePicUrl;

  const handleInput = (value) => {
    if (props.handleQuery && typeof props.handleQuery === 'function') {
      props.handleQuery(value);
    }

    const queryParams = queryString.stringify({
      ...router.query,
      q: value,
    });

    router.push(`${router.pathname}?${queryParams}`, undefined, {
      shallow: true,
    });
  };

  const handleQueryChange = debounce(handleInput, 300);

  return (
    <Row className="align-items-center">
      <Col lg={2}>
        <Link href="/dashboard">
          <div className="logo-section">
            <img src="/imgs/svgs/rec-logo.svg" alt="logo-rec" />
          </div>
        </Link>
      </Col>
      <Col lg={6}>
        <SearchBox>
          <input
            type="text"
            placeholder="Search brands, categories or contacts"
            onChange={(e) => handleQueryChange(e.target.value)}
            defaultValue={router.query && router.query.q ? router.query.q : ''}
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
              <Link href="/my-recs">My Recs</Link>
            </li>
            <li>
              <Link href="/contacts">My Contacts</Link>
            </li>
            <li>
              <a href="#">
                <img
                  src={profilePicUrl || '/imgs/default_profile_pic.jpg'}
                  alt="userImg"
                />
              </a>
            </li>
          </ul>
        </NavItem>
      </Col>
    </Row>
  );
}

export default SearchBarNav;
