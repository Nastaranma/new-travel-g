
import ClubService from './logic/ClubService';
import ClubsService from './logic/ClubsService';
import MemberService from './logic/MemberService';
import MembersService from './logic/MembersService';

export const store = {
  clubService: ClubService.instance,
  clubsService: ClubsService.instance,
  memberService:MemberService.instance,
  membersService:MembersService.instance

};

export {
  ClubService,
  ClubsService,
  MemberService,
  MembersService
};

