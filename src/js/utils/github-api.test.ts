import { formatReason, getNotificationTypeIcon } from './github-api';
import { Reason, SubjectType } from '../../types/github';

describe('./utils/github-api.ts', () => {
  it('should format the notification reason', () => {
    expect(formatReason('assign')).toMatchSnapshot();
    expect(formatReason('author')).toMatchSnapshot();
    expect(formatReason('comment')).toMatchSnapshot();
    expect(formatReason('invitation')).toMatchSnapshot();
    expect(formatReason('manual')).toMatchSnapshot();
    expect(formatReason('mention')).toMatchSnapshot();
    expect(formatReason('review_requested')).toMatchSnapshot();
    expect(formatReason('security_alert')).toMatchSnapshot();
    expect(formatReason('state_change')).toMatchSnapshot();
    expect(formatReason('subscribed')).toMatchSnapshot();
    expect(formatReason('team_mention')).toMatchSnapshot();
    expect(formatReason('ci_activity')).toMatchSnapshot();
    expect(formatReason('something_else_unknown' as Reason)).toMatchSnapshot();
  });

  it('should get the notification type icon', () => {
    expect(getNotificationTypeIcon('CheckSuite').name).toBe('SyncIcon');
    expect(getNotificationTypeIcon('Commit').name).toBe('GitCommitIcon');
    expect(getNotificationTypeIcon('Discussion').name).toBe(
      'CommentDiscussionIcon'
    );
    expect(getNotificationTypeIcon('Issue').name).toBe('IssueOpenedIcon');
    expect(getNotificationTypeIcon('PullRequest').name).toBe(
      'GitPullRequestIcon'
    );
    expect(getNotificationTypeIcon('Release').name).toBe('TagIcon');
    expect(getNotificationTypeIcon('RepositoryVulnerabilityAlert').name).toBe(
      'AlertIcon'
    );
    expect(getNotificationTypeIcon('Unknown' as SubjectType).name).toBe(
      'QuestionIcon'
    );
  });
});
