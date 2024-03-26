

import React from "react";
import MatchMediaMock from 'jest-matchmedia-mock';
import { render, screen,act, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import {AntTable} from "./antTable";
import {_get as mockGet} from "../httpCliet";


jest.mock("../httpCliet");



let matchMedia;
 
describe('Your testing module',() => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });
 
  afterEach(() => {
    matchMedia.clear();
  });
   test("Can search for a post using its ID", async () => {
    const MOckresp={
        data:{
            users: [    {key:1,id: 1, firstName: 'Terry', lastName: 'Medhurst', maidenName: 'Smitham', age: 50}]
        }
    }; 
    mockGet.mockResolvedValueOnce(MOckresp);
   render(<AntTable/ >);
   await waitFor(() => expect(mockGet).toHaveBeenCalledTimes(1)) 
    
  });
 
})

