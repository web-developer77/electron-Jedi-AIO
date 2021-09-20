// @flow
import * as React from 'react';
import { useContext } from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import ThemeContext from '../Context/ThemeContext';

type Props = {
  is_open: boolean;
  Close: any;
};

export function TaskModal({ is_open, Close }: Props) {
  const { theme } = useContext(ThemeContext);
  if (!is_open) return null;
  return (
    <div className={theme+'create-task border-radius-5 ' + theme + 'border-task'}>
      <div
        className={
          'modalHeader flex items-center justify-between ' +
          theme +
          'bg-task ' +
          theme +
          'border-task'
        }
      >
        <h2 className={"modalTitle font-Gilroy-Bold font-11 "+theme+"custom-color"}>Create Tasks</h2>
        <div className="flex items-center cursor-pointer" onClick={Close}>
          <span className="font-Gilroy-Bold font-10 text-blue mr-1">Close</span>
          <img src={ArrowRight} alt="" className="modal-close " />
        </div>
      </div>
      <div className={theme+"task-modal-content"}>
        <div className="flex items-center justify-between">
          <div className="w-50 mr-1">
            <select name="site" id="select">
              <option value="Select">Site</option>
            </select>
          </div>
          <div className="w-50">
            <select name="mode" id="mode">
              <option value="Select">Mode</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            name="keyword"
            placeholder="Keywords/SKU/Variant"
            className="font-Gilroy-Bold"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-50 mr-1">
            <select name="site" id="select">
              <option value="Select">Site</option>
            </select>
          </div>
          <div className="w-50">
            <select name="mode" id="mode">
              <option value="Select">Mode</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-50 mr-1">
            <select name="site" id="select">
              <option value="Select">Site</option>
            </select>
          </div>
          <div className="w-50">
            <select name="mode" id="mode">
              <option value="Select">Mode</option>
            </select>
          </div>
        </div>
        <div className="form-group flex justify-center mt-5">
          <button
            className={"btn button-create "+theme+"createBtn font-Gilroy-Bold border-radius-3"}
            onClick={Close}
          >
            Create Tasks
          </button>
        </div>
      </div>
    </div>
  );
}
