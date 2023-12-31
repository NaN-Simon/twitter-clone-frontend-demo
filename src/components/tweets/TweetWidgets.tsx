import React, { FC } from 'react';
import { Container } from '@mui/material';
import ButtonLike from './buttons/ButtonLike';
import ButtonViews from './buttons/ButtonViews';
import ButtonRetweet from '@/components/tweets/buttons/ButtonRetweet';
import ButtonReply from '@/components/tweets/buttons/ButtonReply';
import ButtonShare from './buttons/ButtonShare';
import { ITweetWidgets } from '@/components/tweets/types';

const TweetWidgets: FC<ITweetWidgets> = ({
  id,
  likes,
  isLiked,
  isRetweeted,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
}) => {

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'raw',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <ButtonReply replyTo={replyTo && replyTo} replyToId={id} replies={replies} />

      <ButtonRetweet
        id={id}
        isRetweeted={isRetweeted}
        retweets={retweets}
        retweetTo={retweetTo}
      />
      <ButtonLike id={id} likes={likes} isLiked={isLiked} />
      <ButtonViews
        views={views}
      />
      <ButtonShare id={id} />
    </Container>
  );
};

export default TweetWidgets;
