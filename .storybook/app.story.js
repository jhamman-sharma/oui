import React from 'react';
import { storiesOf } from '@storybook/react';

import ArrowsInline from '../src/components/ArrowsInline';
import Attention from '../src/components/Attention';
import Badge from '../src/components/Badge';
import BlockList from '../src/components/BlockList';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import EmptyDashboard from '../src/components/EmptyDashboard';
import Input from '../src/components/Input';
import Link from '../src/components/Link';
import ProgressBar from '../src/components/ProgressBar';
import ProgressDots from '../src/components/ProgressDots';
import RangeSlider from '../src/components/RangeSlider';
import SelectDropdown from '../src/components/SelectDropdown';
import Spinner from '../src/components/Spinner';
import Switch from '../src/components/Switch';
import TabNav from '../src/components/TabNav';
import Table from '../src/components/Table';
import Token from '../src/components/Token';

const stories = storiesOf('Overview/', module);

const RootNav = props => {
    return (
      <ul
        className="root-nav root-nav--open"
        data-test-section="p13n-root-navbar"
      >
        <li className="root-nav__logo push-double--bottom">
          <a href="/v2/projects">
            <div className="root-nav__logo--mark" />
            <div className="root-nav__logo--full" />
          </a>
        </li>

        <li className="root-nav__project">
          <div className="epsilon truncate push--top" title="Dave's Websites">
            Dave's Websites
          </div>
          <span className="root-nav__project_badge">WEB</span>
        </li>

        <li className="push-double--ends">
          <ul>
            <li data-test-section="project-switcher-navbar">
              <button
                data-oui-component="true"
                className="oui-button oui-button--unstyled oui-button--default"
                type="button"
                data-test-section="project-switcher-navbar-button"
              >
                <div className="display--inline">
                  <div className="">
                    <div className="root-nav__link root-nav__link--primary">
                      <div className="flex">
                        <svg
                          data-oui-component="true"
                          className="oui-icon display--inline oui-icon--24"
                          height="24"
                          name="projects"
                          stroke="none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>projects</title>
                          <desc>icon</desc>
                          <path d="M3.919 8h-.838A2.084 2.084 0 0 1 1 5.919v-.838C1 3.934 1.934 3 3.081 3h.838C5.066 3 6 3.934 6 5.081v.838A2.084 2.084 0 0 1 3.919 8zm-.838-4C2.485 4 2 4.485 2 5.081v.838C2 6.515 2.485 7 3.081 7h.838C4.515 7 5 6.515 5 5.919v-.838C5 4.485 4.515 4 3.919 4h-.838zm.838 11h-.838A2.084 2.084 0 0 1 1 12.919v-.838C1 10.934 1.934 10 3.081 10h.838C5.066 10 6 10.934 6 12.081v.838A2.084 2.084 0 0 1 3.919 15zm-.838-4C2.485 11 2 11.485 2 12.081v.838C2 13.515 2.485 14 3.081 14h.838C4.515 14 5 13.515 5 12.919v-.838C5 11.485 4.515 11 3.919 11h-.838zm.838 11h-.838A2.084 2.084 0 0 1 1 19.919v-.838C1 17.934 1.934 17 3.081 17h.838C5.066 17 6 17.934 6 19.081v.838A2.084 2.084 0 0 1 3.919 22zm-.838-4C2.485 18 2 18.485 2 19.081v.838C2 20.515 2.485 21 3.081 21h.838C4.515 21 5 20.515 5 19.919v-.838C5 18.485 4.515 18 3.919 18h-.838zM21.919 8H10.081A2.084 2.084 0 0 1 8 5.919v-.838C8 3.934 8.934 3 10.081 3h11.838C23.066 3 24 3.934 24 5.081v.838A2.084 2.084 0 0 1 21.919 8zM10.081 4C9.485 4 9 4.485 9 5.081v.838C9 6.515 9.485 7 10.081 7h11.838C22.515 7 23 6.515 23 5.919v-.838C23 4.485 22.515 4 21.919 4H10.081zm11.838 11H10.081A2.084 2.084 0 0 1 8 12.919v-.838C8 10.934 8.934 10 10.081 10h11.838c1.147 0 2.081.934 2.081 2.081v.838A2.084 2.084 0 0 1 21.919 15zm-11.838-4C9.485 11 9 11.485 9 12.081v.838C9 13.515 9.485 14 10.081 14h11.838c.596 0 1.081-.485 1.081-1.081v-.838c0-.596-.485-1.081-1.081-1.081H10.081zm11.838 11H10.081A2.084 2.084 0 0 1 8 19.919v-.838C8 17.934 8.934 17 10.081 17h11.838c1.147 0 2.081.934 2.081 2.081v.838A2.084 2.084 0 0 1 21.919 22zm-11.838-4C9.485 18 9 18.485 9 19.081v.838C9 20.515 9.485 21 10.081 21h11.838c.596 0 1.081-.485 1.081-1.081v-.838c0-.596-.485-1.081-1.081-1.081H10.081z" />
                        </svg>
                      </div>
                      <span className="root-nav__link__text">Projects</span>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li data-test-section="web-navbar">
              <a
                data-ui-component="true"
                href="/v2/projects/4576166120"
                className="reverse"
                data-test-section="web-navbar-internal-link"
                data-track-id="web-navbar-internal-link"
              >
                <div className="">
                  <div className="">
                    <div className="root-nav__link is-active root-nav__link--primary">
                      <div className="flex">
                        <svg
                          data-oui-component="true"
                          className="oui-icon display--inline oui-icon--24"
                          height="24"
                          name="experiment"
                          stroke="none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>experiment</title>
                          <desc>icon</desc>
                          <path d="M19.409 24h-.004l-15.727-.009a2.16 2.16 0 0 1-1.919-1.149c-.374-.685-.325-1.547.129-2.256l3.051-4.606L8 11.502V.5a.498.498 0 0 1 .71-.453l1.679.781c.97.554 2.035.552 2.965.02l1.955-.81A.5.5 0 0 1 16 .5v10.744l5.309 9.429c.414.681.428 1.505.029 2.212S20.219 24 19.409 24zm0-1a1.19 1.19 0 0 0 1.058-.606 1.19 1.19 0 0 0-.021-1.223l-5.381-9.554a.48.48 0 0 1-.065-.242V1.247l-1.206.497c-1.187.686-2.617.687-3.864-.029L9 1.283v10.373c0 .101-.03.199-.087.282L5.768 16.54l-3.043 4.595c-.256.401-.29.865-.088 1.235.22.403.593.635 1.037.636L19.409 23zM8.5 12h.01-.01z" />
                          <path d="M5.782 1.479L5.335.584 6.502 0h2.027v1H6.738zm12.43-.002L17.272 1h-1.819V0h2.059l1.153.585z" />
                          <ellipse
                            transform="rotate(-9.132 11.659 8.9)"
                            cx="11.66"
                            cy="8.9"
                            rx="1.56"
                            ry="1.56"
                          />
                          <ellipse
                            transform="rotate(-9.132 14.217 19.497)"
                            cx="14.22"
                            cy="19.5"
                            rx="1.5"
                            ry="1.5"
                          />
                          <ellipse
                            transform="rotate(-9.091 12.652 15.035)"
                            cx="12.653"
                            cy="15.036"
                            rx=".98"
                            ry=".98"
                          />
                        </svg>
                      </div>
                      <span className="root-nav__link__text">Experiments</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li data-test-section="audiences-navbar">
              <a
                data-ui-component="true"
                href="/v2/projects/4576166120/audiences"
                className="reverse"
                data-test-section="audiences-navbar-internal-link"
                data-track-id="audiences-navbar-internal-link"
              >
                <div className="">
                  <div className="">
                    <div className="root-nav__link root-nav__link--primary">
                      <div className="flex">
                        <svg
                          data-oui-component="true"
                          className="oui-icon display--inline oui-icon--24"
                          height="24"
                          name="audiences"
                          stroke="none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>audiences</title>
                          <desc>icon</desc>
                          <path d="M12.173 21.9c-4.373 0-6.812-.191-7.292-.381-.846-.335-.33-2.724-.323-2.748.122-.42.596-.582 2.219-1.078.764-.233 2.042-.623 2.26-.834.266-.263.538-1.562.627-2.612a.5.5 0 0 1 .996.084c-.05.596-.264 2.591-.92 3.24-.36.356-1.249.646-2.671 1.08-.559.17-1.3.397-1.579.532-.062.359-.106 1.096-.067 1.444.581.097 2.501.274 6.751.274 4.971 0 6.354-.164 6.737-.251.059-.341.048-1.13-.007-1.448-.282-.129-1.044-.357-1.618-.529-1.546-.462-2.51-.769-2.87-1.129-.636-.641-.724-2.667-.735-3.273a.5.5 0 0 1 .49-.51c.262 0 .504.214.51.49.022 1.163.23 2.372.444 2.587.231.215 1.618.629 2.447.877 1.551.464 1.966.61 2.158.876.271.372.337 2.382-.079 2.793-.222.218-.524.516-7.478.516z" />
                          <path d="M12.173 15.624c-1.7 0-3.393-1.532-4.527-4.099-.34-.769-.543-2.465-.543-4.538 0-3.073 2.274-5.573 5.07-5.573 2.843 0 5.069 2.409 5.069 5.485 0 2.157-.204 3.885-.547 4.623-1.207 2.607-2.855 4.102-4.522 4.102zm0-13.21c-2.244 0-4.07 2.052-4.07 4.573 0 2.288.246 3.657.457 4.134 1.143 2.583 2.616 3.503 3.613 3.503 1.242 0 2.594-1.317 3.615-3.522.227-.487.454-1.976.454-4.203 0-2.515-1.787-4.485-4.069-4.485zM3.478 18.789c-.747 0-2.536-.221-2.916-.27a.559.559 0 0 1-.114-.028c-.773-.292-.328-2.215-.322-2.234.115-.379.476-.498 1.836-.893.587-.17 1.569-.456 1.757-.61.163-.155.382-1.057.455-1.889a.501.501 0 0 1 .996.088c-.041.462-.217 2.012-.77 2.532-.303.286-1.018.507-2.159.839-.408.119-.943.274-1.188.375a5.618 5.618 0 0 0-.051.868c.936.113 2.243.25 2.574.22a.51.51 0 0 1 .542.454.5.5 0 0 1-.454.542 2.471 2.471 0 0 1-.186.006z" />
                          <path d="M6.268 14.039c-1.388 0-2.765-1.183-3.685-3.164-.277-.596-.443-1.9-.443-3.488 0-2.391 1.852-4.335 4.128-4.335a.5.5 0 0 1 0 1c-1.725 0-3.128 1.496-3.128 3.335 0 1.599.176 2.693.35 3.067.886 1.906 2.016 2.585 2.778 2.585a.5.5 0 0 1 0 1zm14.969 4.75c-.065 0-.124-.002-.176-.007a.5.5 0 1 1 .088-.996c.307.025 1.196-.097 1.849-.205a5.492 5.492 0 0 0-.05-.883c-.245-.101-.78-.256-1.188-.375-1.142-.332-1.856-.554-2.159-.839-.553-.521-.729-2.07-.77-2.533a.5.5 0 0 1 .454-.542.506.506 0 0 1 .542.454c.074.833.293 1.735.459 1.893.184.15 1.166.436 1.753.606 1.36.396 1.721.514 1.836.893.006.019.451 1.942-.322 2.234-.353.073-1.646.3-2.316.3z" />
                          <path d="M17.732 14.039a.5.5 0 0 1 0-1c.763 0 1.893-.679 2.778-2.584.174-.375.35-1.469.35-3.068 0-1.839-1.403-3.335-3.128-3.335a.5.5 0 0 1 0-1c2.276 0 4.128 1.945 4.128 4.335 0 1.588-.166 2.892-.443 3.489-.92 1.98-2.297 3.163-3.685 3.163z" />
                        </svg>
                      </div>
                      <span className="root-nav__link__text">Audiences</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li data-test-section="data-navbar">
              <a
                data-ui-component="true"
                href="/v2/projects/4576166120/implementation/pages"
                className="reverse"
                data-test-section="data-navbar-internal-link"
                data-track-id="data-navbar-internal-link"
              >
                <div className="">
                  <div className="">
                    <div className="root-nav__link root-nav__link--primary">
                      <div className="flex">
                        <svg
                          data-oui-component="true"
                          className="oui-icon display--inline oui-icon--24"
                          height="24"
                          name="pages"
                          stroke="none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>pages</title>
                          <desc>icon</desc>
                          <path d="M18.782 16H1.218A1.219 1.219 0 0 1 0 14.782V1.218C0 .546.546 0 1.218 0h17.564C19.454 0 20 .546 20 1.218v13.564c0 .672-.546 1.218-1.218 1.218zM1.218 1A.219.219 0 0 0 1 1.218v13.564c0 .12.098.218.218.218h17.564c.12 0 .218-.098.218-.218V1.218A.219.219 0 0 0 18.782 1H1.218z" />
                          <path d="M19 4H1a.5.5 0 0 1 0-1h18a.5.5 0 0 1 0 1zm4 5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z" />
                          <path d="M22.682 20H4.218C3.558 20 3 19.424 3 18.742V18a.5.5 0 0 1 1 0v.742c0 .13.107.258.218.258h18.464c.14 0 .318-.16.318-.258V5.218C23 5.14 22.84 5 22.682 5H22a.5.5 0 0 1 0-1h.682C23.306 4 24 4.5 24 5.218v13.524C24 19.4 23.372 20 22.682 20z" />
                        </svg>
                      </div>
                      <span className="root-nav__link__text">Implementation</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li data-test-section="settings-navbar">
              <a
                data-ui-component="true"
                href="/v2/projects/4576166120/settings/implementation"
                className="reverse"
                data-test-section="settings-navbar-internal-link"
                data-track-id="settings-navbar-internal-link"
              >
                <div className="">
                  <div className="">
                    <div className="root-nav__link root-nav__link--primary">
                      <div className="flex">
                        <svg
                          data-oui-component="true"
                          className="oui-icon display--inline oui-icon--24"
                          height="24"
                          name="settings"
                          stroke="none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>settings</title>
                          <desc>icon</desc>
                          <path d="M13.5 24h-3a.5.5 0 0 1-.5-.5v-2.854c-.791-.2-1.669-.456-2.332-.78L5.636 21.9a.514.514 0 0 1-.707 0L2.1 19.071a.5.5 0 0 1 0-.708l2.033-2.033c-.322-.661-.578-1.539-.779-2.33H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2.854c.201-.791.456-1.668.778-2.331L2.1 5.636a.5.5 0 0 1 0-.707l2.829-2.828a.5.5 0 0 1 .707 0l2.033 2.032c.665-.324 1.542-.579 2.331-.778V.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2.855c.789.198 1.664.452 2.33.777L18.363 2.1a.5.5 0 0 1 .707 0l2.829 2.828a.5.5 0 0 1 0 .708l-2.032 2.032c.324.665.578 1.542.778 2.332H23.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2.854c-.201.791-.456 1.669-.778 2.331l2.032 2.033a.5.5 0 0 1 0 .707l-2.828 2.828a.5.5 0 0 1-.707 0l-2.034-2.032c-.662.322-1.54.578-2.33.778V23.5a.502.502 0 0 1-.501.5zM11 23h2v-2.746a.5.5 0 0 1 .382-.486c.558-.135 2.04-.493 2.777-.944a.5.5 0 0 1 .614.073l1.944 1.942 2.121-2.121-1.942-1.943a.5.5 0 0 1-.073-.614c.45-.736.81-2.22.945-2.777a.5.5 0 0 1 .486-.384H23v-2h-2.747a.5.5 0 0 1-.486-.383c-.134-.557-.491-2.036-.944-2.778a.5.5 0 0 1 .073-.614l1.942-1.942-2.122-2.121-1.943 1.942a.503.503 0 0 1-.614.073c-.668-.408-1.904-.733-2.776-.942A.502.502 0 0 1 13 3.748V1h-2v2.748a.5.5 0 0 1-.383.486c-.873.209-2.11.535-2.777.943a.502.502 0 0 1-.614-.073L5.282 3.161 3.16 5.282l1.943 1.943a.501.501 0 0 1 .074.615c-.451.737-.81 2.22-.945 2.777a.5.5 0 0 1-.486.383H1v2h2.746a.5.5 0 0 1 .486.383c.135.558.495 2.041.945 2.777a.5.5 0 0 1-.073.614L3.16 18.718l2.122 2.121 1.942-1.944a.5.5 0 0 1 .615-.073c.738.453 2.22.812 2.778.946a.5.5 0 0 1 .383.486V23z" />
                          <path d="M12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" />
                        </svg>
                      </div>
                      <span className="root-nav__link__text">Settings</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <li className="anchor--bottom">
          <ul>
            <li>
              <ul>
                <li>
                  <a
                    href="https://teams.optimizely.com/social-auth/login/optimizely/?account_id=4576166120&amp;next=/accounts/4576166120"
                    className="root-nav__link root-nav__link--secondary truncate"
                    data-test-section="program-management-nav-link"
                    data-dir="left-center"
                    data-track-id="2.0-SidebarMenu.ProgramManagement"
                  >
                    <div className="root-nav__link__text">Program Management</div>
                  </a>
                </li>
                <li>
                  <a
                    class="root-nav__link root-nav__link--secondary truncate"
                    data-test-section="help-nav-link"
                    data-dir="left-center"
                    data-track-id="2.0-SidebarMenu.Help"
                  >
                    <svg class="root-nav__icon root-nav__icon--small" />

                    <div class="root-nav__link__text">
                      Help
                      <span class="push-half--left oui-badge oui-badge--live">
                        0
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="root-nav__link root-nav__link--secondary truncate"
                    data-test-section="feedback-nav-link"
                    data-dir="left-center"
                    data-track-id="2.0-SidebarMenu.Feedback"
                  >
                    <svg className="root-nav__icon root-nav__icon--small" />
                    <div className="root-nav__link__text">Feedback…</div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.optimizely.com/projects/4576166120"
                    className="root-nav__link root-nav__link--secondary truncate"
                    data-test-section="ab-testing-nav-link"
                    data-dir="left-center"
                    data-track-id="2.0-SidebarMenu.ClassicOptimizely"
                    data-optly-1e9cbe57-99ce-43a5-8e67-dc6b60cb7854=""
                  >
                    <svg className="root-nav__icon root-nav__icon--small" />
                    <div className="root-nav__link__text">Optimizely Classic</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="push-double--top">
              <div className="root-nav__user root-nav__link root-nav__link--tertiary">
                <div
                  className="avatar avatar--small color-admin--border flex--none"
                  data-test-section="profile-pic-wrapper-nav-open"
                />
                <ul className="push--left flex--1">
                  <div data-ui-component="true" className="lego-dropdown-group">
                    <div>
                      <div
                        data-test-section="account-switcher-dropdown-activator"
                        title="Dave R."
                        className="link--reverse micro flex flex-align--center admin--color"
                      >
                        <span
                          className="display--block truncate"
                          data-test-section="nav-bar-user-name"
                        >
                          Dave R.
                        </span>
                        <div className="flex--1 push-half--left">
                          <span className="lego-arrow-inline--down lego-arrow-inline--small vertical-align--middle" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <li className="root-nav__faded__link truncate">
                    <button
                      data-oui-component="true"
                      className="oui-button oui-button--unstyled oui-button--default"
                      type="button"
                      data-test-section="nav-bar-open-impersonate"
                    >
                      <span className="admin--color">Emulate</span>
                    </button>
                  </li>
                  <li className="root-nav__faded__link truncate">
                    <a
                      data-ui-component="true"
                      href="https://app.optimizely.com/v2/accountsettings"
                      className="link link--reverse"
                    >
                      Account Settings
                    </a>
                  </li>
                  <li className="root-nav__faded__link truncate">
                    <a
                      data-ui-component="true"
                      href="https://app.optimizely.com/v2/profile"
                      className="link link--reverse"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="root-nav__faded__link truncate">
                    <a
                      data-ui-component="true"
                      href="/account/signout?landing_page=/v2"
                      className="link link--reverse"
                    >
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    );
  };

const Content = props => {
    return (
      <div className="flex flex--1" data-test-section="layers-table-container">
        <div className="flex flex--1 flex--column">
          <div
            data-ui-component="true"
            className="l-scroll--y l-flexer soft-double--sides position--relative"
          >
            {props.children}
          </div>
        </div>
      </div>
    );
  };

const ContentTable = props => {
  return (
    <table
      data-oui-component="true"
      className="push-double--top oui-table oui-table--rule-no-bottom-border oui-table--loose"
      style={{ tableLayout: "auto" }}
    >
      <thead>
        <tr className="">
          <th className="">
            <span className="flex flex--row flex-align--center cursor--pointer">
              <span
                className="flex flex-align--center"
                data-test-section="toggle-field"
              >
                Name&nbsp;
              </span>
            </span>
          </th>
          <th className="">Type</th>
          <th className="">Status</th>
          <th className="">
            <span className="flex flex--row flex-align--center cursor--pointer">
              <span
                className="flex flex-align--center"
                data-test-section="toggle-field"
              >
                Modified&nbsp;
              </span>
            </span>
          </th>
          <th className="">Results</th>
          <th className="oui-numerical" />
        </tr>
      </thead>
      <tbody>
        <tr
          className=""
          data-test-section="layer-table-row-for-12823490688"
        >
          <td className="">
            <div>
              <a
                data-ui-component="true"
                href="/v2/projects/4576166120/campaigns/12823490688"
                className="epsilon cursor--pointer"
                data-test-section="layer-table-row-name"
                data-track-id="layer-table-row-name"
              >
                Publish
              </a>
              <div
                className="muted micro"
                data-test-section="layer-table-row-description"
              />
            </div>
          </td>
          <td className="" data-test-section="layer-table-row-type">
            Multivariate Test
          </td>
          <td className="">
            <span
              className="color--good-news"
              data-test-section="layer-table-row-status"
            >
              Running
            </span>
          </td>
          <td className="" data-test-section="layer-table-row-modified">
            <span className="nowrap">Jan 18, 2019</span>
          </td>
          <td className="">
            <a
              data-ui-component="true"
              href="/v2/projects/4576166120/results/12823490688?previousView=CAMPAIGNS"
              className="oui-button oui-button--outline oui-button--small"
              data-test-section="layer-table-row-results"
              data-track-id="layer-table-row-results"
            >
              <span>Results</span>
            </a>
          </td>
          <td className="oui-numerical">
            <div
              data-ui-component="true"
              className="oui-dropdown-group"
              data-test-section="layer-table-row-dropdown-12823490688"
            >
              <div>
                <button
                  type="button"
                  className="oui-button oui-button--plain"
                >
                  <div className="flex">
                    <div className="flex--1 truncate">
                      <svg className="oui-icon" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr
          className=""
          data-test-section="layer-table-row-for-5135192826"
        >
          <td className="">
            <div>
              <a
                data-ui-component="true"
                href="/v2/projects/4576166120/campaigns/5135192826"
                className="epsilon cursor--pointer"
                data-test-section="layer-table-row-name"
                data-track-id="layer-table-row-name"
              >
                Bricks &amp; Branches
              </a>
              <div
                className="muted micro"
                data-test-section="layer-table-row-description"
              />
            </div>
          </td>
          <td className="" data-test-section="layer-table-row-type">
            Personalization Campaign
          </td>
          <td className="">
            <span className="" data-test-section="layer-table-row-status">
              Paused
            </span>
          </td>
          <td className="" data-test-section="layer-table-row-modified">
            <span className="nowrap">Mar 28, 2017</span>
          </td>
          <td className="">
            <a
              data-ui-component="true"
              href="/v2/projects/4576166120/results/5135192826?previousView=CAMPAIGNS"
              className="oui-button oui-button--outline oui-button--small"
              data-test-section="layer-table-row-results"
              data-track-id="layer-table-row-results"
            >
              <span>Results</span>
            </a>
          </td>
          <td className="oui-numerical">
            <div
              data-ui-component="true"
              className="oui-dropdown-group"
              data-test-section="layer-table-row-dropdown-5135192826"
            >
              <div>
                <button
                  type="button"
                  className="oui-button oui-button--plain"
                >
                  <div className="flex">
                    <div className="flex--1 truncate">
                      <svg className="oui-icon" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const Stage = props => {
    return (
      <div className="root-panel">
        <div className="stage">
          <div
            data-ui-component="true"
            className="stage__item__content--column position--relative"
          >
            <div className="stage">
              <div className="stage__item">
                <div className="stage__item__content--column">
                  <div
                    data-ui-component="true"
                    className="soft-double--top soft-quad--sides"
                    data-test-section="layers-header"
                  >
                    <div
                      className="muted"
                      data-test-section="dashboard-header-project-name"
                    >
                      Dave's Websites
                    </div>
                    <div
                      className="beta push--bottom"
                      data-test-section="dashboard-header-title"
                    >
                      Experiments
                    </div>
                    <div className="lego-tabs dashboard-tabs push-double--bottom">
                      <div className="lego-tabs-nav">
                        <a
                          data-ui-component="true"
                          href="/v2/projects/4576166120"
                          className="lego-tabs-nav__item is-active link--muted"
                          data-test-section="layers-overview-tab"
                          data-track-id="layers-overview-tab"
                        >
                          Overview
                        </a>
                        <a
                          data-ui-component="true"
                          href="/v2/projects/4576166120/groups"
                          className="lego-tabs-nav__item link--muted"
                          data-test-section="groups-tab"
                          data-track-id="groups-tab"
                        >
                          Exclusion Groups
                        </a>
                        <a
                          data-ui-component="true"
                          href="/v2/projects/4576166120/change_history"
                          className="lego-tabs-nav__item link--muted"
                          data-test-section="change-history-tab"
                          data-track-id="change-history-tab"
                        >
                          Change History
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

stories
  .add('App', () => {
    return (
      <div className="flex">
        <link
          href="http://localhost:9777/dist/css/optly_x_css_v3-2b2139a484cea48a66e2.css"
          rel="stylesheet"
        />
        <RootNav />
        <div>
          <Stage />
          <Content>
            <div class="flex push--double--ends push-double--sides">
              <Attention>
                Hello test attention.
              </Attention>
            </div>
            <ContentTable/>
          </Content>
        </div>
      </div>
    )});
